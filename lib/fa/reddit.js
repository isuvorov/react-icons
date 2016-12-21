'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaReddit = function (_React$Component) {
    _inherits(FaReddit, _React$Component);

    function FaReddit() {
        _classCallCheck(this, FaReddit);

        return _possibleConstructorReturn(this, (FaReddit.__proto__ || Object.getPrototypeOf(FaReddit)).apply(this, arguments));
    }

    _createClass(FaReddit, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm24.4 26.1q0.4 0.3 0 0.6-1.3 1.4-4.4 1.4t-4.4-1.4q-0.4-0.3 0-0.6 0.1-0.2 0.3-0.2t0.3 0.2q1.1 1 3.8 1 2.7 0 3.8-1.1 0.1-0.1 0.3-0.1t0.3 0.1z m-6.8-4.1q0 0.8-0.6 1.4t-1.4 0.6-1.4-0.6-0.6-1.4q0-0.8 0.6-1.4t1.4-0.6 1.4 0.6 0.6 1.4z m8.8 0q0 0.8-0.6 1.4t-1.4 0.6-1.4-0.6-0.6-1.4 0.6-1.4 1.4-0.6 1.4 0.6 0.6 1.4z m5.6-2.7q0-1.1-0.8-1.8t-1.9-0.8-1.9 0.8q-2.9-2-6.9-2.2l1.4-6.3 4.4 1q0 0.8 0.6 1.4t1.4 0.6 1.4-0.6 0.6-1.4-0.6-1.4-1.4-0.6q-1.2 0-1.8 1.1l-4.9-1.1q-0.4-0.1-0.6 0.4l-1.5 6.9q-4 0.2-6.9 2.2-0.8-0.8-1.9-0.8-1.1 0-1.9 0.8t-0.8 1.8q0 0.8 0.4 1.5t1.1 0.9q-0.1 0.6-0.1 1.3 0 3.2 3.1 5.4t7.5 2.3q4.4 0 7.6-2.3t3.1-5.4q0-0.7-0.2-1.3 0.7-0.3 1.1-1t0.4-1.4z m8 0.7q0 4.1-1.6 7.8t-4.2 6.4-6.4 4.2-7.8 1.6-7.8-1.6-6.4-4.2-4.2-6.4-1.6-7.8 1.6-7.8 4.2-6.4 6.4-4.2 7.8-1.6 7.8 1.6 6.4 4.2 4.2 6.4 1.6 7.8z' })
                )
            );
        }
    }]);

    return FaReddit;
}(React.Component);

exports.default = FaReddit;
module.exports = exports['default'];