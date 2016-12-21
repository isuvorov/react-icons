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

var FaSnapchat = function (_React$Component) {
    _inherits(FaSnapchat, _React$Component);

    function FaSnapchat() {
        _classCallCheck(this, FaSnapchat);

        return _possibleConstructorReturn(this, (FaSnapchat.__proto__ || Object.getPrototypeOf(FaSnapchat)).apply(this, arguments));
    }

    _createClass(FaSnapchat, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.6 25.6q0-0.5-0.5-0.6-1.5-0.3-2.7-1.3t-1.8-2.4q-0.1-0.4-0.1-0.6 0-0.3 0.4-0.5t1-0.4 0.9-0.5 0.5-0.8q0-0.4-0.4-0.7t-0.9-0.3q-0.3 0-0.7 0.2t-0.7 0.2q-0.1 0-0.3-0.1 0.1-2.1 0.1-2.5 0-1.8-0.3-2.6-0.8-1.7-2.3-2.7t-3.4-0.9q-4.5 0-6.2 3.6-0.4 0.8-0.4 2.6 0 0.4 0.2 2.5-0.1 0.1-0.4 0.1-0.2 0-0.7-0.2t-0.6-0.2q-0.5 0-0.9 0.3t-0.4 0.7q0 0.5 0.4 0.8t1 0.5 1 0.4 0.4 0.5q0 0.2-0.2 0.6-1.4 3.1-4.4 3.7-0.5 0.1-0.5 0.6 0 1.1 3.1 1.5 0 0.2 0.1 0.6t0.3 0.7 0.5 0.2q0.3 0 0.8-0.1t0.9-0.1q0.8 0 1.5 0.4t1.2 0.7 1.3 0.7 1.7 0.3q1 0 1.8-0.3t1.3-0.7 1.2-0.7 1.5-0.4q0.3 0 0.8 0.1t0.9 0.1q0.3 0 0.5-0.2t0.3-0.7 0.1-0.6q3-0.4 3-1.5z m5.7-5.6q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z' })
                )
            );
        }
    }]);

    return FaSnapchat;
}(React.Component);

exports.default = FaSnapchat;
module.exports = exports['default'];