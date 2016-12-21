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

var IoIosMedicalOutline = function (_React$Component) {
    _inherits(IoIosMedicalOutline, _React$Component);

    function IoIosMedicalOutline() {
        _classCallCheck(this, IoIosMedicalOutline);

        return _possibleConstructorReturn(this, (IoIosMedicalOutline.__proto__ || Object.getPrototypeOf(IoIosMedicalOutline)).apply(this, arguments));
    }

    _createClass(IoIosMedicalOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm34.4 14.7l-9.2 5.3 9.2 5.3-2.5 4.4-9.2-5.4v10.7h-5v-10.7l-9.2 5.4-2.5-4.4 9.2-5.3-9.2-5.3 2.5-4.4 9.2 5.4v-10.7h5v10.7l9.2-5.4z m-1.7 11.1l-10-5.8 10-5.8-1.2-2.2-10 5.8v-11.5h-2.5v11.5l-10-5.8-1.3 2.2 10 5.8-10 5.8 1.3 2.2 10-5.8v11.6h2.5v-11.6l10 5.8z' })
                )
            );
        }
    }]);

    return IoIosMedicalOutline;
}(React.Component);

exports.default = IoIosMedicalOutline;
module.exports = exports['default'];