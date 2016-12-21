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

var IoChatbubbles = function (_React$Component) {
    _inherits(IoChatbubbles, _React$Component);

    function IoChatbubbles() {
        _classCallCheck(this, IoChatbubbles);

        return _possibleConstructorReturn(this, (IoChatbubbles.__proto__ || Object.getPrototypeOf(IoChatbubbles)).apply(this, arguments));
    }

    _createClass(IoChatbubbles, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm5.5 30.5c-0.1 0 0-0.1-0.1-0.2-1.2-1.7-1.9-3.8-1.9-6 0-3.3 1.5-6.3 3.8-8.3-0.1 0.9-0.3 1.7-0.3 2.7 0 7.2 6.1 13.1 13.6 13.1 1.2 0 2.4-0.2 3.4-0.5-2.1 2.5-5.3 4.2-8.9 4.2-1.6 0-3.2-0.4-4.6-1h0c-0.2 0-0.4-0.1-0.7-0.1s-0.4 0.1-0.7 0.1l-4.3 1.8 0.9-5c0-0.3-0.1-0.5-0.2-0.8z m16.9-26.7c7.5 0 13.6 5.9 13.6 13.1 0 2.6-0.9 5-2.2 7-0.1 0.1-0.1 0.2-0.1 0.2-0.2 0.4-0.3 0.7-0.3 1l1.4 5.8-5.4-2.1c-0.3 0-0.5-0.1-0.8-0.1-0.3 0-0.5 0.1-0.7 0.1l-0.2 0.1c-0.6 0.2-1.2 0.4-1.9 0.6-1.1 0.3-2.2 0.4-3.4 0.4-7.5 0-13.5-5.8-13.5-13 0-1 0.1-1.9 0.2-2.8 1.3-5.9 6.7-10.3 13.3-10.3z' })
                )
            );
        }
    }]);

    return IoChatbubbles;
}(React.Component);

exports.default = IoChatbubbles;
module.exports = exports['default'];