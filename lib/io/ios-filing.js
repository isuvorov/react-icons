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

var IoIosFiling = function (_React$Component) {
    _inherits(IoIosFiling, _React$Component);

    function IoIosFiling() {
        _classCallCheck(this, IoIosFiling);

        return _possibleConstructorReturn(this, (IoIosFiling.__proto__ || Object.getPrototypeOf(IoIosFiling)).apply(this, arguments));
    }

    _createClass(IoIosFiling, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm19.8 22.5c2.3 0 4.2-1.6 4.8-3.7h8.9v11.2h-27.5v-11.2h8.9c0.6 2.1 2.5 3.7 4.9 3.7z m-8.8-5h-5l5-7.5v6.3h1.3v-6.3h15v6.3h1.2v-6.3l5 7.5h-10c0 2-1.7 3.8-3.7 3.8s-3.8-1.8-3.8-3.8h-5z' })
                )
            );
        }
    }]);

    return IoIosFiling;
}(React.Component);

exports.default = IoIosFiling;
module.exports = exports['default'];