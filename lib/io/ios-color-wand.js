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

var IoIosColorWand = function (_React$Component) {
    _inherits(IoIosColorWand, _React$Component);

    function IoIosColorWand() {
        _classCallCheck(this, IoIosColorWand);

        return _possibleConstructorReturn(this, (IoIosColorWand.__proto__ || Object.getPrototypeOf(IoIosColorWand)).apply(this, arguments));
    }

    _createClass(IoIosColorWand, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm15.4 12.4l20 20.1-2.6 2.7-20-20.1z m-1.2-2.6v-5h2.5v5h-2.5z m0 16v-5h2.5v5h-2.5z m7.2-9.4v-2.5h5v2.5h-5z m2.3-7.6l-3.5 3.5-1.8-1.8 3.5-3.5z m-16.5 0l1.8-1.8 3.5 3.5-1.8 1.8z m0 13l3.5-3.5 1.8 1.7-3.5 3.6z m-2.7-5.4v-2.5h5v2.5h-5z' })
                )
            );
        }
    }]);

    return IoIosColorWand;
}(React.Component);

exports.default = IoIosColorWand;
module.exports = exports['default'];