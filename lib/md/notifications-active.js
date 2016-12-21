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

var MdNotificationsActive = function (_React$Component) {
    _inherits(MdNotificationsActive, _React$Component);

    function MdNotificationsActive() {
        _classCallCheck(this, MdNotificationsActive);

        return _possibleConstructorReturn(this, (MdNotificationsActive.__proto__ || Object.getPrototypeOf(MdNotificationsActive)).apply(this, arguments));
    }

    _createClass(MdNotificationsActive, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 36.6c-1.9 0-3.4-1.4-3.4-3.2h6.7c0 1.9-1.5 3.2-3.3 3.2z m10-18.2v8.2l3.4 3.4v1.6h-26.8v-1.6l3.4-3.4v-8.2c0-5.2 2.7-9.4 7.5-10.6v-1.2c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v1.2c4.8 1.2 7.5 5.5 7.5 10.6z m3.3-0.9c-0.3-4.5-2.5-8.3-5.9-10.7l2.4-2.3c3.9 3 6.6 7.7 6.8 13h-3.3z m-20.6-10.7c-3.5 2.4-5.7 6.2-6 10.7h-3.3c0.2-5.3 2.9-10 6.8-13z' })
                )
            );
        }
    }]);

    return MdNotificationsActive;
}(React.Component);

exports.default = MdNotificationsActive;
module.exports = exports['default'];