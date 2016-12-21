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

var MdMovieFilter = function (_React$Component) {
    _inherits(MdMovieFilter, _React$Component);

    function MdMovieFilter() {
        _classCallCheck(this, MdMovieFilter);

        return _possibleConstructorReturn(this, (MdMovieFilter.__proto__ || Object.getPrototypeOf(MdMovieFilter)).apply(this, arguments));
    }

    _createClass(MdMovieFilter, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.2 19.9l3.4-1.5-3.4-1.6-1.6-3.4-1.5 3.4-3.5 1.6 3.5 1.5 1.5 3.5z m-9.4 5.5l4.6-2-4.6-2.2-2.2-4.6-2 4.6-4.6 2.2 4.6 2 2 4.6z m11.2-18.8h6.6v23.4c0 1.8-1.4 3.4-3.2 3.4h-26.8c-1.8 0-3.2-1.6-3.2-3.4v-20c0-1.8 1.4-3.4 3.2-3.4h1.8l3.2 5h5l-3.2-5h3.2l3.4 5h5l-3.4-5h3.4l3.4 5h5z' })
                )
            );
        }
    }]);

    return MdMovieFilter;
}(React.Component);

exports.default = MdMovieFilter;
module.exports = exports['default'];