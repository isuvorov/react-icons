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

var IoIosReload = function (_React$Component) {
    _inherits(IoIosReload, _React$Component);

    function IoIosReload() {
        _classCallCheck(this, IoIosReload);

        return _possibleConstructorReturn(this, (IoIosReload.__proto__ || Object.getPrototypeOf(IoIosReload)).apply(this, arguments));
    }

    _createClass(IoIosReload, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm15 5c8.3 0 15 6.7 15 15l4.3-4.1 0.7 0.7-5.5 5.3-5.2-5.3 0.7-0.7 4 4c0-7.6-6.3-13.9-14-13.9s-14 6.3-14 14 6.3 14 14 14c6.2 0 11.4-3.9 13.3-9.5l0.9 0.3c-2 5.9-7.6 10.2-14.2 10.2-8.3 0-15-6.7-15-15s6.7-15 15-15z' })
                )
            );
        }
    }]);

    return IoIosReload;
}(React.Component);

exports.default = IoIosReload;
module.exports = exports['default'];