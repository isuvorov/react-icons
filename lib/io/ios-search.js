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

var IoIosSearch = function (_React$Component) {
    _inherits(IoIosSearch, _React$Component);

    function IoIosSearch() {
        _classCallCheck(this, IoIosSearch);

        return _possibleConstructorReturn(this, (IoIosSearch.__proto__ || Object.getPrototypeOf(IoIosSearch)).apply(this, arguments));
    }

    _createClass(IoIosSearch, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35 33.2l-1.8 1.8-8.8-8.8c-2.1 1.6-4.7 2.6-7.5 2.6-6.6 0-11.9-5.4-11.9-11.9s5.3-11.9 11.9-11.9 11.9 5.3 11.9 11.9c0 2.8-1 5.4-2.6 7.4z m-25.6-8.7c2 2 4.7 3 7.5 3s5.4-1.1 7.5-3.1 3.1-4.7 3.1-7.5-1.1-5.5-3.1-7.5-4.7-3.1-7.5-3.1-5.5 1-7.5 3.1-3.1 4.7-3.1 7.5 1 5.5 3.1 7.6z' })
                )
            );
        }
    }]);

    return IoIosSearch;
}(React.Component);

exports.default = IoIosSearch;
module.exports = exports['default'];