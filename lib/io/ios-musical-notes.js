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

var IoIosMusicalNotes = function (_React$Component) {
    _inherits(IoIosMusicalNotes, _React$Component);

    function IoIosMusicalNotes() {
        _classCallCheck(this, IoIosMusicalNotes);

        return _possibleConstructorReturn(this, (IoIosMusicalNotes.__proto__ || Object.getPrototypeOf(IoIosMusicalNotes)).apply(this, arguments));
    }

    _createClass(IoIosMusicalNotes, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm32.5 25c0 2.7 0.3 6.3-3.8 6.4-3.9 0.2-4.9-1.2-4.9-3.2 0-1.6 0.7-3 4.1-3.2 1.8-0.1 2.6-0.2 3.4-0.2v-12.5l-15 2.5v12.6c0 2.7 0.3 6.4-3.9 6.5-3.8 0.2-4.9-1.3-4.9-3.3 0-1.5 0.7-3 4.1-3.2 1.8-0.1 2.7-0.1 3.4-0.1v-18.5l17.5-2.7v18.9z' })
                )
            );
        }
    }]);

    return IoIosMusicalNotes;
}(React.Component);

exports.default = IoIosMusicalNotes;
module.exports = exports['default'];