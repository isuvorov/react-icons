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

var FaRecycle = function (_React$Component) {
    _inherits(FaRecycle, _React$Component);

    function FaRecycle() {
        _classCallCheck(this, FaRecycle);

        return _possibleConstructorReturn(this, (FaRecycle.__proto__ || Object.getPrototypeOf(FaRecycle)).apply(this, arguments));
    }

    _createClass(FaRecycle, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm18.7 26.1l-0.4 8.2 0 0.5-9.4-0.6q-0.8-0.1-1.5-0.8t-1-1.4q-0.3-0.6-0.4-1.2t0.1-1.5 0.3-1.2 0.5-1.5 0.4-1.1q1.7 0.2 11.4 0.6z m-8.7-13.1l4 8.5-3.2-2.1q-1.4 1.6-2.5 3.2t-1.6 2.8-0.9 2.1-0.4 1.4l-0.1 0.5-4.3-8q-0.4-0.5-0.4-1.2t0.2-1.1l0.1-0.4q0.8-1.4 2.6-4.1l-3.1-2z m27.5 11.6l-4.2 8q-0.3 0.6-0.8 1t-1 0.5l-0.4 0.1q-1.6 0.1-4.9 0.2l0.2 3.7-5.1-8.2 4.7-8.1 0.1 3.9q3.8 0.3 6.4 0.1t3.7-0.8z m-17.5-20.7q-1.1 1.4-5.9 9.7l-7.1-4.1-0.4-0.3 5-7.9q0.4-0.7 1.3-1.1t1.8-0.2q0.5 0.1 1.1 0.3t0.9 0.5 1 0.7 0.8 0.8 0.8 0.8 0.7 0.8z m14.6 6.9l4.7 8.1q0.4 0.8 0.3 1.7t-0.6 1.6q-0.3 0.5-0.7 0.9t-0.9 0.6-1.1 0.5-1 0.3-1.2 0.3-1 0.3q-0.8-1.6-5.9-9.7l7-4.4z m-3.2-5.1l3.2-1.8-4.9 8.3-9.4-0.4 3.4-2q-0.8-1.9-1.7-3.7t-1.7-2.7-1.4-1.8-1.1-1l-0.3-0.3 9 0q0.7-0.1 1.3 0.2t0.9 0.7l0.2 0.3q0.9 1.4 2.5 4.2z' })
                )
            );
        }
    }]);

    return FaRecycle;
}(React.Component);

exports.default = FaRecycle;
module.exports = exports['default'];