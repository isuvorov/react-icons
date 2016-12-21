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

var MdPermDataSetting = function (_React$Component) {
    _inherits(MdPermDataSetting, _React$Component);

    function MdPermDataSetting() {
        _classCallCheck(this, MdPermDataSetting);

        return _possibleConstructorReturn(this, (MdPermDataSetting.__proto__ || Object.getPrototypeOf(MdPermDataSetting)).apply(this, arguments));
    }

    _createClass(MdPermDataSetting, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.6 34.1q1.1 0 1.8-0.7t0.7-1.8-0.7-1.7-1.8-0.8-1.7 0.8-0.8 1.7 0.8 1.8 1.7 0.7z m6.2-1.6l1.8 1.3q0.2 0.3 0.1 0.6l-1.7 2.9q-0.2 0.4-0.5 0.2l-2-0.9q-0.3 0.3-1.4 0.8l-0.4 2.3q0 0.3-0.4 0.3h-3.3q-0.5 0-0.5-0.3l-0.3-2.3q-0.6-0.3-1.4-0.8l-2 0.9q-0.4 0.2-0.6-0.2l-1.6-2.9q-0.2-0.3 0.1-0.6l1.8-1.3q0-0.1-0.1-0.4t0-0.5 0-0.4 0.1-0.3l-1.8-1.4q-0.3-0.3-0.1-0.6l1.6-2.9q0.2-0.3 0.6-0.1l2 0.8q1-0.6 1.4-0.8l0.3-2.2q0-0.3 0.5-0.3h3.3q0.5 0 0.5 0.3l0.3 2.2q0.3 0.1 1.4 0.8l2-0.8q0.4-0.2 0.6 0.1l1.6 2.9q0.1 0.3-0.1 0.6l-1.8 1.4q0.1 0.2 0.1 0.7 0 0.2 0 0.5t-0.1 0.4z m-6.2-13.4q-5.1 0-8.8 3.7t-3.7 8.8q0 0.7 0.2 1.8h-19.3l33.4-33.4-0.1 19.3q-1.1-0.2-1.7-0.2z' })
                )
            );
        }
    }]);

    return MdPermDataSetting;
}(React.Component);

exports.default = MdPermDataSetting;
module.exports = exports['default'];