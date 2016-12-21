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

var IoIosBook = function (_React$Component) {
    _inherits(IoIosBook, _React$Component);

    function IoIosBook() {
        _classCallCheck(this, IoIosBook);

        return _possibleConstructorReturn(this, (IoIosBook.__proto__ || Object.getPrototypeOf(IoIosBook)).apply(this, arguments));
    }

    _createClass(IoIosBook, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm12.8 5c2.7 0 5.2 0.8 6.6 2.4v27.6h-0.2c-0.6-2.8-3.3-5-6.4-5-2.6 0-5.1 1.3-6.1 3.3h-1.7v-22.1c0-4.2 3.5-6.2 7.8-6.2z m14.4 0c4.3 0 7.8 2 7.8 6.2v22.1h-1.7c-1.3-2.4-3.5-3.3-6.1-3.3-3.1 0-5.8 2.2-6.4 5h-0.2v-27.6c1.4-1.6 3.9-2.4 6.6-2.4z' })
                )
            );
        }
    }]);

    return IoIosBook;
}(React.Component);

exports.default = IoIosBook;
module.exports = exports['default'];