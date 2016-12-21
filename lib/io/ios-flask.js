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

var IoIosFlask = function (_React$Component) {
    _inherits(IoIosFlask, _React$Component);

    function IoIosFlask() {
        _classCallCheck(this, IoIosFlask);

        return _possibleConstructorReturn(this, (IoIosFlask.__proto__ || Object.getPrototypeOf(IoIosFlask)).apply(this, arguments));
    }

    _createClass(IoIosFlask, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30.5 29.9c0.4 0.6 0.7 1.4 0.7 1.9 0 0.6-0.3 1.1-0.6 1.4-0.4 0.3-1 0.6-1.8 0.6h-17.6c-0.9 0-1.6-0.2-1.9-0.5-0.1-0.1-0.5-0.4-0.5-1.4 0-0.5 0.3-1.4 0.7-2l5.3-8.6h10.5l5.2 8.6z m3.6-1c0.7 1.3 0.9 2.5 0.9 3.6-0.1 2.8-2.1 5-4.9 5h-20c-2.8 0-5-2.1-5.1-5 0-1.1 0.3-2.3 0.9-3.6l9.1-15.2v-9.9h-1.2v-1.3h12.5v1.3h-1.3v9.9z m-17.8-23.9v1.3h3.7v-1.3h-3.7z m0 3.8v1.2h2.5v-1.2h-2.5z m0 3.7v1.3h3.7v-1.3h-3.7z m-1.4 3.8l-0.7 1.2h4.6v-1.2h-3.9z m17.5 15.6c0-0.7-0.2-1.7-0.8-2.6l-5.6-9.3h-12l-5.6 9.3c-0.5 0.9-0.8 1.9-0.8 2.6 0 2.2 1.2 3.1 3.6 3.1h17.6c2.4 0 3.5-1.2 3.6-3.1z' })
                )
            );
        }
    }]);

    return IoIosFlask;
}(React.Component);

exports.default = IoIosFlask;
module.exports = exports['default'];