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

var IoIosMusicalNote = function (_React$Component) {
    _inherits(IoIosMusicalNote, _React$Component);

    function IoIosMusicalNote() {
        _classCallCheck(this, IoIosMusicalNote);

        return _possibleConstructorReturn(this, (IoIosMusicalNote.__proto__ || Object.getPrototypeOf(IoIosMusicalNote)).apply(this, arguments));
    }

    _createClass(IoIosMusicalNote, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27.5 8v5.1c0 0.3-0.2 0.5-0.5 0.4l-5.7-1v15c0 2.6 0.1 6.3-4 6.4-3.7 0.2-4.8-1.2-4.8-3.2 0-1.5 0.7-3 4-3.2 1.7-0.1 2.9-0.1 3.5-0.1v-21.3l7 1.5 0.2 0.1c0.1 0 0.2 0 0.3 0.2v0.1z' })
                )
            );
        }
    }]);

    return IoIosMusicalNote;
}(React.Component);

exports.default = IoIosMusicalNote;
module.exports = exports['default'];