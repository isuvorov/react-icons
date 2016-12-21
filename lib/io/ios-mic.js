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

var IoIosMic = function (_React$Component) {
    _inherits(IoIosMic, _React$Component);

    function IoIosMic() {
        _classCallCheck(this, IoIosMic);

        return _possibleConstructorReturn(this, (IoIosMic.__proto__ || Object.getPrototypeOf(IoIosMic)).apply(this, arguments));
    }

    _createClass(IoIosMic, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 27.7c-3.4 0-6.2-3-6.2-6.6v-12c0-3.6 2.8-6.6 6.2-6.6s6.2 3 6.2 6.6v12c0 3.6-2.8 6.6-6.2 6.6z m8.7-12.7h1.3v6.3c0 5.2-4 9.5-9.1 9.9v4.9h5.4v1.4h-12.6v-1.4h5.7v-4.9c-5.3-0.4-9.4-4.7-9.4-9.9v-6.3h1.5v6.3c0 4.6 3.9 8.5 8.6 8.5s8.6-3.9 8.6-8.5v-6.3z' })
                )
            );
        }
    }]);

    return IoIosMic;
}(React.Component);

exports.default = IoIosMic;
module.exports = exports['default'];