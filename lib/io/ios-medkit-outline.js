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

var IoIosMedkitOutline = function (_React$Component) {
    _inherits(IoIosMedkitOutline, _React$Component);

    function IoIosMedkitOutline() {
        _classCallCheck(this, IoIosMedkitOutline);

        return _possibleConstructorReturn(this, (IoIosMedkitOutline.__proto__ || Object.getPrototypeOf(IoIosMedkitOutline)).apply(this, arguments));
    }

    _createClass(IoIosMedkitOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm21 16.3h-2.5v5h-5v2.5h5v5h2.5v-5h5v-2.5h-5v-5z m1.3-1.3v5h5v5h-5v5h-5v-5h-5v-5h5v-5h5z m3.7-5h10v25h-32.5v-25h10v-2.5c0-1.4 0.8-2.5 2.3-2.5h7.7c1.5 0 2.5 1.1 2.5 2.5v2.5z m-11.2-2.3v2.3h10v-2.3c0-0.8-0.6-1.4-1.4-1.4h-7.6c-0.8 0-1 0.6-1 1.4z m20 26.1v-22.5h-30v22.5h30z' })
                )
            );
        }
    }]);

    return IoIosMedkitOutline;
}(React.Component);

exports.default = IoIosMedkitOutline;
module.exports = exports['default'];