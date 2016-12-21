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

var IoIosTrash = function (_React$Component) {
    _inherits(IoIosTrash, _React$Component);

    function IoIosTrash() {
        _classCallCheck(this, IoIosTrash);

        return _possibleConstructorReturn(this, (IoIosTrash.__proto__ || Object.getPrototypeOf(IoIosTrash)).apply(this, arguments));
    }

    _createClass(IoIosTrash, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm24.8 8.8h6.2v1.2h-1.6l-1.8 22.7c0 1.3-1.1 2.3-2.3 2.3h-11c-1.3 0-2.3-1-2.3-2.3l-1.9-22.7h-1.6v-1.2h6.2v-1.5c0-1.3 1.1-2.3 2.3-2.3h5.5c1.2 0 2.2 1 2.2 2.3v1.5z m-8.9-1.5v1.5h7.7v-1.5c0-0.7-0.5-1.1-1.1-1.1h-5.5c-0.6 0-1.1 0.4-1.1 1.1z m-0.3 24h1.1l-0.9-18.8h-1z m4.7 0v-18.8h-1.1v18.8h1.1z m3.6 0l0.9-18.8h-1.1l-0.9 18.8h1.1z' })
                )
            );
        }
    }]);

    return IoIosTrash;
}(React.Component);

exports.default = IoIosTrash;
module.exports = exports['default'];