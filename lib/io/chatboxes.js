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

var IoChatboxes = function (_React$Component) {
    _inherits(IoChatboxes, _React$Component);

    function IoChatboxes() {
        _classCallCheck(this, IoChatboxes);

        return _possibleConstructorReturn(this, (IoChatboxes.__proto__ || Object.getPrototypeOf(IoChatboxes)).apply(this, arguments));
    }

    _createClass(IoChatboxes, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm22.7 28.6l2.1 1.4c-0.4 1.6-2.3 2.5-4.1 2.5h-7c-0.7 0-0.9 0.2-1.1 0.2l-4.1 3.6v-3.8h-1.2c-2.1 0-3.8-1.2-3.8-3.2v-10.1c0-1.9 1.6-3.5 3.6-3.5h0.1v7.9c0 2.6 2.3 4.6 5 4.6h9.2c0.8 0 1.1 0.2 1.3 0.4z m8.4-24.8c2.7 0 4.9 2.1 4.9 4.6v13.2c0 2.5-2.2 4.7-4.9 4.7h-1.3v5l-5.9-4.7c-0.2-0.2-0.6-0.3-1.3-0.3h-7.9c-2.8 0-4.9-2.2-4.9-4.7v-13.2c0-2.5 1.6-4.7 4.3-4.7h17z' })
                )
            );
        }
    }]);

    return IoChatboxes;
}(React.Component);

exports.default = IoChatboxes;
module.exports = exports['default'];