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

var IoIosFilm = function (_React$Component) {
    _inherits(IoIosFilm, _React$Component);

    function IoIosFilm() {
        _classCallCheck(this, IoIosFilm);

        return _possibleConstructorReturn(this, (IoIosFilm.__proto__ || Object.getPrototypeOf(IoIosFilm)).apply(this, arguments));
    }

    _createClass(IoIosFilm, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm4.5 6.9h31.3v26.2h-31.3v-26.2z m5.6 25v-3.8h-4.3v3.8h4.3z m0-5v-3.8h-4.3v3.8h4.3z m0-5v-3.8h-4.3v3.8h4.3z m0-5v-3.8h-4.3v3.8h4.3z m0-5v-3.8h-4.3v3.8h4.3z m18.8 8.7v-1.2h-17.5v1.2h17.5z m5.6 11.3v-3.8h-4.4v3.8h4.4z m0-5v-3.8h-4.4v3.8h4.4z m0-5v-3.8h-4.4v3.8h4.4z m0-5v-3.8h-4.4v3.8h4.4z m0-5v-3.8h-4.4v3.8h4.4z' })
                )
            );
        }
    }]);

    return IoIosFilm;
}(React.Component);

exports.default = IoIosFilm;
module.exports = exports['default'];