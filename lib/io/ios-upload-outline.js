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

var IoIosUploadOutline = function (_React$Component) {
    _inherits(IoIosUploadOutline, _React$Component);

    function IoIosUploadOutline() {
        _classCallCheck(this, IoIosUploadOutline);

        return _possibleConstructorReturn(this, (IoIosUploadOutline.__proto__ || Object.getPrototypeOf(IoIosUploadOutline)).apply(this, arguments));
    }

    _createClass(IoIosUploadOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm22.5 11.3h10v23.7h-25v-23.7h10v1.2h-8.7v21.3h22.5v-21.3h-8.8v-1.2z m-7.4-2.1l-0.9-0.9 5.8-5.8 5.8 5.8-0.9 0.9-4.3-4.3v19h-1.2v-19z' })
                )
            );
        }
    }]);

    return IoIosUploadOutline;
}(React.Component);

exports.default = IoIosUploadOutline;
module.exports = exports['default'];