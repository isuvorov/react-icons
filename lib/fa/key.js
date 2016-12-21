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

var FaKey = function (_React$Component) {
    _inherits(FaKey, _React$Component);

    function FaKey() {
        _classCallCheck(this, FaKey);

        return _possibleConstructorReturn(this, (FaKey.__proto__ || Object.getPrototypeOf(FaKey)).apply(this, arguments));
    }

    _createClass(FaKey, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm19.6 11.4q0-1.8-1.3-3t-3-1.3-3.1 1.3-1.2 3q0 1 0.4 1.9-0.9-0.4-1.8-0.4-1.8 0-3.1 1.2t-1.2 3 1.2 3.1 3.1 1.2 3-1.2 1.3-3.1q0-0.9-0.5-1.8 0.9 0.4 1.9 0.4 1.8 0 3-1.2t1.3-3.1z m19 15.7q0 0.4-1.1 1.5t-1.5 1.1q-0.2 0-0.6-0.3t-0.9-0.8-0.8-0.9-0.6-0.6l-2.1 2.2 4.9 4.9q0.6 0.6 0.6 1.5 0 1-0.8 1.8t-1.8 0.9q-0.9 0-1.6-0.6l-14.9-15q-4 2.9-8.2 2.9-3.6 0-5.9-2.3t-2.3-5.9q0-3.6 2.1-7t5.6-5.5 6.9-2.1q3.7 0 6 2.2t2.3 6q0 4.2-3 8.1l8 7.9 2.1-2.1q-0.1-0.1-0.6-0.5t-0.9-0.9-0.7-0.8-0.4-0.7q0-0.3 1.1-1.4t1.5-1.1q0.3 0 0.5 0.2 0.1 0.1 1 1t1.9 1.8 1.9 1.9 1.6 1.7 0.7 0.9z' })
                )
            );
        }
    }]);

    return FaKey;
}(React.Component);

exports.default = FaKey;
module.exports = exports['default'];