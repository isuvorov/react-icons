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

var IoIosInformatempty = function (_React$Component) {
    _inherits(IoIosInformatempty, _React$Component);

    function IoIosInformatempty() {
        _classCallCheck(this, IoIosInformatempty);

        return _possibleConstructorReturn(this, (IoIosInformatempty.__proto__ || Object.getPrototypeOf(IoIosInformatempty)).apply(this, arguments));
    }

    _createClass(IoIosInformatempty, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm18.1 13.4c0-1 0.6-1.5 1.6-1.5s1.6 0.5 1.6 1.5-0.6 1.6-1.6 1.6-1.6-0.5-1.6-1.6z m3.2 13.5h1.2v0.6h-5v-0.6h1.3v-9.4h-1.3v-0.6h3.8v10z' })
                )
            );
        }
    }]);

    return IoIosInformatempty;
}(React.Component);

exports.default = IoIosInformatempty;
module.exports = exports['default'];