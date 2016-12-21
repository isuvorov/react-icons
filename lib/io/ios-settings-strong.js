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

var IoIosSettingsStrong = function (_React$Component) {
    _inherits(IoIosSettingsStrong, _React$Component);

    function IoIosSettingsStrong() {
        _classCallCheck(this, IoIosSettingsStrong);

        return _possibleConstructorReturn(this, (IoIosSettingsStrong.__proto__ || Object.getPrototypeOf(IoIosSettingsStrong)).apply(this, arguments));
    }

    _createClass(IoIosSettingsStrong, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm0 29.4h22.1c0.5-1.1 1.7-1.9 2.9-1.9s2.4 0.8 2.9 1.9h7.1v2.5h-7.1c-0.5 1.1-1.6 1.9-2.9 1.9s-2.4-0.8-2.9-1.9h-22.1z m0-10.6h7.1c0.5-1.1 1.7-1.9 2.9-1.9s2.4 0.8 2.9 1.9h22.1v2.5h-22.1c-0.5 1-1.6 1.8-2.9 1.8s-2.4-0.8-2.9-1.8h-7.1z m0-10.7h22.1c0.5-1.1 1.7-1.8 2.9-1.8s2.4 0.7 2.9 1.8h7.1v2.5h-7.1c-0.5 1.1-1.6 1.9-2.9 1.9s-2.4-0.8-2.9-1.9h-22.1z' })
                )
            );
        }
    }]);

    return IoIosSettingsStrong;
}(React.Component);

exports.default = IoIosSettingsStrong;
module.exports = exports['default'];